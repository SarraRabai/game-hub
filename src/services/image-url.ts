


const getCroppedImageUrl =(url : string) => {
    if(!url) return '';
const target ='media/';    
const index =url.indexOf(target) + target.length;//add crops
const result =  url.slice(0, index)+ 'crop/600/400/' + url.slice(index);
console.log('result ===',result)
return result
// return url.slice(0, index)+ 'crop/600/400' + url.slice(index);

}//index represent the starting position of the media prametre


export default getCroppedImageUrl;