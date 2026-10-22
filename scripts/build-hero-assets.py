from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = root / 'public' / 'hero'

source.mkdir(parents=True, exist_ok=True)

print('Hero asset folder ready at:', source)
print('Add your source video then run ffmpeg to generate a compressed hero asset.')
print('Example:')
print("  ffmpeg -i input.mp4 -vf 'scale=1280:-1,format=yuv420p' -c:v libx264 -preset medium -crf 26 output.mp4")
