


const getCroppedImageUrl =(url : string) => {
const target ='media/';    
const index =url.indexOf(target) + target.length;//add crops
return url.slice(0, index)+ 'crop/600/400' + url.slice(index);
}//index represent the starting position of the media prametre


export default getCroppedImageUrl;