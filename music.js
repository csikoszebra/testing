function()
{
	var soundurl = SoundCache.getSound("atp:/music.wav");
    var soundvolume = 2.0;

    Ent = entityID;   
    var copyEnt = Entities.getEntityProperties(Ent, ["position"]);
    var jsonEnt = JSON.stringify(copyEnt);
    var data = JSON.parse(jsonEnt);   
    var basepos = data.position;
             

    Audio.playSound(soundurl, { loop: true, position: basepos ,volume: soundvolume });
}
