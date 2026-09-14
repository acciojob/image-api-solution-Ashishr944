//your code here
function processImage(){
	const file = documen.getElementById("imageInput").files[0];
	if(!file){
		return;
	}

	const originalImage = document.getElementById("originalImage");
	const processedImage = document.getElementById("processedImage");

	const imageURL = URL.createdObjectUrl(file);
	originalImage.src = imageURL;
	const formData = new FormData();
	formData.append("image", file);



	fetch("https://api.imagga.com/v2/colors", {
		method: "POST",
		body: formData,
		headers: {
			"Authorization": "Basic" + btoa("api_key:api_secret")
		}
	})
	.then(response => response.json())
	.then(data => {
		console.log(data);
		processedImage.src = imageURL;
	})
	.catch(error => {
		console.error(error);
	});
}










