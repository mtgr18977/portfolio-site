import urllib.request
import tomllib
import json
import ssl

# Bypass SSL verification for simple script usage if needed, though usually standard context works.
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BASE_URL = "https://raw.githubusercontent.com/4rays/sf6-move-data/main/moves"

# Character slugs based on standard naming (guessing conventions for some)
CHARACTERS = [
    "ryu", "ken", "chunli", "guile", "zangief", "dhalsim", "ehonda", "blanka", 
    "cammy", "deejay", "manon", "marisa", "jp", "juri", "kimberly", "lily", 
    "luke", "jamie", "rashid", "aki", "ed", "akuma", "mbison", "terry"
]

def fetch_char_data(char):
    url = f"{BASE_URL}/{char}.toml"
    try:
        print(f"Fetching {char}...")
        with urllib.request.urlopen(url, context=ctx) as response:
            data = response.read().decode("utf-8")
            return tomllib.loads(data)
    except Exception as e:
        print(f"Failed to fetch {char}: {e}")
        return None

def process_moves(moves):
    processed = []
    if not moves:
        return []
    
    for move in moves:
        # Extract relevant fields
        mp = {
            "name": move.get("name", "Unknown"),
            "input": move.get("input", ""),
            "startup": move.get("startup", ""),
            "active": move.get("active", ""),
            "recovery": move.get("recovery", ""),
            "onBlock": move.get("frameAdvantage", {}).get("block", ""),
            "onHit": move.get("frameAdvantage", {}).get("hit", ""),
            "notes": "; ".join(move.get("notes", []))
        }
        
        # Normalize lists to strings
        if isinstance(mp["active"], list):
            mp["active"] = "-".join(map(str, mp["active"]))
        
        processed.append(mp)
    return processed

final_data = {}

for char in CHARACTERS:
    raw = fetch_char_data(char)
    if raw and "moves" in raw:
        final_data[char] = process_moves(raw["moves"])
    elif raw:
         # Some files might not have 'moves' key directly or structure differs?
         # Based on ryu.toml, it is [[moves]].
         print(f"Warning: No moves found for {char}")

# Write to JS file
output_path = "sf6-frame-data.js"
print(f"Writing data to {output_path}...")

json_content = json.dumps(final_data, indent=2)
js_content = f"const SF6_FRAME_DATA = {json_content};\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Done.")
