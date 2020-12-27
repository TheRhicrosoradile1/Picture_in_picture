const videoElement= document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select share screen (Asychronous JS function)
async function selectMediaStream(){
	try{
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject =mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		}
	}catch(error){

		//To catch Error
		console.log('there is an error here my friend',error);
	}
}
button.addEventListener('click',async() => {
//to diable the video in the background
button.disabled=true;
//starting picture in picture
await videoElement.requestPictureInPicture();
//reset button
button.diabled=false;
});
selectMediaStream();