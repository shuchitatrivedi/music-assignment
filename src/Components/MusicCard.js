function MusicCard (props){
const {title,thumbnail,artist,id,onMusicHandler} = props;
const artistList = artist.map((item)=>item.name).join("&");
    return (<>
    <section className="musicCard">
        <img 
        alt=""
        src={thumbnail}
        height = {"150"}
        width={"150"}
        className="bannerImg"
        onClick={()=>onMusicHandler(id)}
        />
        <div className="title">{title}</div>
        <div className="artist">{artistList}</div>

    </section>

    </>)
}
export default MusicCard;