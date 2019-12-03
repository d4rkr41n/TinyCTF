readarray -t <<< $(cat config.json | grep \"name\" | cut -d '"' -f 4 | awk '{print $1}' | sed "s/^/\(/" | sed "s/$/\)/") # split to array $names

for (( i=0; i<${#MAPFILE[@]}; i++ ))
do
    echo "$i: ${MAPFILE[$i]}"
done
read -p "Pick a team: " tnum

activeTeam="${MAPFILE[$tnum]}"

#activeTeam=$(cat config.json | grep \"name\" | grep \"active\"\:\"1\" | cut -d '"' -f 4 | awk '{print $1}' | sed "s/^/\(/" | sed "s/$/\)/")
echo $(cat correctlog.txt | grep "$activeTeam" | grep -v "Start" | awk '{print $2$3$4}' | sort -u | wc -l) flags found