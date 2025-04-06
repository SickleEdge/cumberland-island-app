# List of image files needed
$images = @(
    "wildlife-hero.jpg",
    "wild-horses.jpg",
    "white-tailed-deer.jpg",
    "armadillo.jpg",
    "raccoon.jpg",
    "bald-eagle.jpg",
    "wood-stork.jpg",
    "painted-bunting.jpg",
    "loggerhead-turtle.jpg",
    "alligator.jpg",
    "rattlesnake.jpg"
)

# Create images directory if it doesn't exist
$imagesDir = "images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir
}

# Download each image
foreach ($image in $images) {
    $width = if ($image -eq "wildlife-hero.jpg") { 1920 } else { 800 }
    $height = if ($image -eq "wildlife-hero.jpg") { 1080 } else { 600 }
    $url = "https://picsum.photos/${width}/${height}"
    $outputPath = Join-Path $imagesDir $image
    
    Write-Host "Downloading $image..."
    Invoke-WebRequest -Uri $url -OutFile $outputPath
}

Write-Host "All images downloaded successfully!" 