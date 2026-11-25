# Recorta la lámina de Andira inermis (fuentes/andira-inermis-lamina.webp) y quita las cotas.
# Genera img/andira-rama.jpg, img/andira-flor.png e img/andira-botones.png. Uso: powershell -File fuentes/recortar-lamina.ps1

Add-Type -AssemblyName PresentationCore,WindowsBase
$global:SRC = Join-Path $PSScriptRoot "andira-inermis-lamina.webp"

if (-not ('Px3' -as [type])) {
Add-Type -TypeDefinition @"
public static class Px3 {
  // Compone sobre blanco y deja alfa en 255
  public static void Flatten(byte[] p){
    for (int i=0;i<p.Length;i+=4){ int a=p[i+3];
      for(int k=0;k<3;k++) p[i+k]=(byte)((p[i+k]*a + 255*(255-a))/255);
      p[i+3]=255; } }
  public static void Fill(byte[] p,int w,int x0,int y0,int x1,int y1){
    for(int y=y0;y<=y1;y++) for(int x=x0;x<=x1;x++){ int i=(y*w+x)*4; p[i]=p[i+1]=p[i+2]=255; } }
  // Copia cada pixel del bloque desde (x+dx, y+dy)
  public static void Patch(byte[] p,int w,int x0,int y0,int x1,int y1,int dx,int dy){
    for(int y=y0;y<=y1;y++) for(int x=x0;x<=x1;x++){ int i=(y*w+x)*4, j=((y+dy)*w+x+dx)*4;
      p[i]=p[j]; p[i+1]=p[j+1]; p[i+2]=p[j+2]; } }
  // Borra una línea recta pintando blanco con un pincel de radio r
  public static void Line(byte[] p,int w,double x0,double y0,double x1,double y1,double r){
    int n=(int)(System.Math.Sqrt((x1-x0)*(x1-x0)+(y1-y0)*(y1-y0))*2)+1;
    for(int s=0;s<=n;s++){ double t=(double)s/n, cx=x0+(x1-x0)*t, cy=y0+(y1-y0)*t;
      for(int y=(int)(cy-r);y<=(int)(cy+r)+1;y++) for(int x=(int)(cx-r);x<=(int)(cx+r)+1;x++){
        if((x-cx)*(x-cx)+(y-cy)*(y-cy)<=r*r){ int i=(y*w+x)*4; p[i]=p[i+1]=p[i+2]=255; } } } }
}
"@
}

function Load-Pixels {
  $s = [IO.File]::OpenRead($SRC)
  $d = [Windows.Media.Imaging.BitmapDecoder]::Create($s, 'PreservePixelFormat', 'OnLoad')
  $f = $d.Frames[0]; $s.Close()
  $w = $f.PixelWidth; $h = $f.PixelHeight
  $px = New-Object byte[] ($w*$h*4)
  $f.CopyPixels($px, $w*4, 0)
  [Px3]::Flatten($px)
  return @{ W=$w; H=$h; P=$px }
}

function Save-Crop($img, $x, $y, $cw, $ch, $path, $scale=1, $fmt='png', $quality=90){
  $bmp = [Windows.Media.Imaging.BitmapSource]::Create($img.W, $img.H, 96, 96, [Windows.Media.PixelFormats]::Bgra32, $null, $img.P, $img.W*4)
  $c = New-Object Windows.Media.Imaging.CroppedBitmap($bmp, (New-Object Windows.Int32Rect($x,$y,$cw,$ch)))
  $src = $c
  if ($scale -ne 1){
    $src = New-Object Windows.Media.Imaging.TransformedBitmap($c, (New-Object Windows.Media.ScaleTransform($scale,$scale)))
  }
  $conv = New-Object Windows.Media.Imaging.FormatConvertedBitmap($src, [Windows.Media.PixelFormats]::Bgr24, $null, 0)
  if ($fmt -eq 'jpg'){ $e = New-Object Windows.Media.Imaging.JpegBitmapEncoder; $e.QualityLevel = $quality }
  else { $e = New-Object Windows.Media.Imaging.PngBitmapEncoder }
  $e.Frames.Add([Windows.Media.Imaging.BitmapFrame]::Create($conv))
  $fs = [IO.File]::Create($path); $e.Save($fs); $fs.Close()
}

function Fill-White($img,$x0,$y0,$x1,$y1){ [Px3]::Fill($img.P,$img.W,$x0,$y0,$x1,$y1) }
function Patch($img,$x0,$y0,$x1,$y1,$dx,$dy){ [Px3]::Patch($img.P,$img.W,$x0,$y0,$x1,$y1,$dx,$dy) }
function Erase-Line($img,$x0,$y0,$x1,$y1,$r=1.6){ [Px3]::Line($img.P,$img.W,$x0,$y0,$x1,$y1,$r) }

$img = Load-Pixels

# Título y «Fabaceae»
Fill-White $img 212 0 595 82
# Cota del folíolo: línea, marcas y texto
Erase-Line $img 424 447 502 501
Erase-Line $img 424 449.5 502 503.5 2.2
Erase-Line $img 416 461 424 447
Erase-Line $img 502 501 493 515
Fill-White $img 420 443 428 451
Fill-White $img 498 497 506 505
Fill-White $img 466 441 540 482
# Cota de la hoja compuesta
Erase-Line $img 274 682 687 711 1.4
Erase-Line $img 274 684.6 687 711.4 2.2
Erase-Line $img 274 668 274 682
Fill-White $img 271 679 277 685
Fill-White $img 565 652 705 718
# Cota del fruto: marcas y línea vertical
Fill-White $img 505 748 560 756
Fill-White $img 530 748 560 912
Fill-White $img 510 900 560 910
# Corchete de la semilla: fuera del fruto se blanquea, dentro se rellena con el punteado vecino
Fill-White $img 522 826 560 881
Patch $img 485 829 522 832 0 -4
Patch $img 487 874 522 878 0 5
# Textos de la rama y del fruto
Fill-White $img 118 815 262 912
Fill-White $img 268 905 342 936


# Flor en vista frontal, sin la cota de 12-15 mm
# Botones florales: interior del recuadro, sin la escala de 5 mm
Fill-White $img 316 1038 356 1056

$DEST = (Resolve-Path (Join-Path $PSScriptRoot "..\img")).Path
Save-Crop $img 0 48 553 890 "$DEST\andira-rama.jpg" 1 'jpg' 90
Save-Crop $img 560 74 202 188 "$DEST\andira-flor.png" 2
Save-Crop $img 250 947 107 110 "$DEST\andira-botones.png" 2
