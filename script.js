const screens = [
  {
    canvas: 'images/mac_mockup-a98050a07f.png',
    video: 'videos/mac.mp4',
    name: 'Mac',
    icon: 'fa-apple',
    class: 'mac',
		widthModifier: '78%'
  },
  {
    canvas: 'images/iphone_mockup-66775c8d53.png',
    video: 'videos/ios_video.mp4',
    name: 'iPhone',
    icon: 'fa-apple',
    class: 'iphone',
		widthModifier: '92%'
  },
  {
    canvas: 'images/android_mockup-35765a7008.png',
    video: 'videos/android_video.mp4',
    name: 'Android',
    icon: 'fa-google-play',
    class: 'android',
		widthModifier: '93%'
  },
  {
    canvas: 'images/desktop_mockup-4d79a1ff4b.png',
    video: 'videos/windows.mp4',
    name: 'Windows',
    icon: 'fa-windows',
    class: 'windows',
		widthModifier: '97%'
  },
];

const renderScreens = () => {
	const screensContainer = document.querySelector('.screens');

	// To be put in a loop
	for (let index = 0; index < screens.length; index++) {
		const screen = screens[index];
		const oneWrapper = document.createElement('DIV');
		const oneMediaWrapper = document.createElement('DIV');
		oneMediaWrapper.classList.add('one-media-wrapper');
		oneWrapper.classList.add('one-wrapper');
		oneWrapper.classList.add(screen.class);
		const oneCanvas = document.createElement('IMG');
		oneCanvas.setAttribute('src', screen.canvas);
		const oneVideo = document.createElement('VIDEO');
		const oneSource = document.createElement('SOURCE');
		oneSource.setAttribute('type', 'video/mp4');
		oneSource.setAttribute('src', screen.video);
		oneVideo.setAttribute('autoplay', true);
		oneVideo.setAttribute('loop', true);
		oneVideo.appendChild(oneSource);
		oneVideo.style.width = screen.widthModifier;
		const oneTextContent = document.createElement('DIV');
		const oneIcon = document.createElement('I');
		const oneText = document.createElement('SPAN');
		oneIcon.classList.add('fab')
		oneIcon.classList.add(screen.icon)
		oneText.innerHTML = screen.name
		oneTextContent.classList.add('text');
		oneTextContent.appendChild(oneIcon);
		oneTextContent.appendChild(oneText);
		oneMediaWrapper.appendChild(oneCanvas);
		oneMediaWrapper.appendChild(oneVideo);
		oneWrapper.appendChild(oneMediaWrapper);
		oneWrapper.appendChild(oneTextContent);
		screensContainer.appendChild(oneWrapper);
	}
};


renderScreens();