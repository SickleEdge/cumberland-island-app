# Image URLs for specific Cumberland Island wildlife
$imageUrls = @{
    "wild-horses.jpg" = "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200"
    "white-tailed-deer.jpg" = "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1200"
    "armadillo.jpg" = "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200"
    "raccoon.jpg" = "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200"
    "bald-eagle.jpg" = "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=1200"
    "wood-stork.jpg" = "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=1200"
    "painted-bunting.jpg" = "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200"
    "loggerhead-turtle.jpg" = "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200"
    "alligator.jpg" = "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=1200"
    "rattlesnake.jpg" = "https://images.unsplash.com/photo-1585095595205-e68b2c9cf120?w=1200"
    "wildlife-hero.jpg" = "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?w=1920"
}

# Ensure images directory exists
if (-not (Test-Path "images")) {
    New-Item -ItemType Directory -Path "images"
}

# Download each image
foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = Join-Path "images" $image.Key
    Write-Host "Downloading $($image.Key)..."
    
    try {
        Invoke-WebRequest -Uri $image.Value -OutFile $outputPath -Headers @{
            "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        Write-Host "Successfully downloaded $($image.Key)"
    }
    catch {
        Write-Host "Failed to download $($image.Key): $_"
    }
}

Write-Host "All downloads completed!" 