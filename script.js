const screens = [
  {
    canvas: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/images%2Fmac_mockup-a98050a07f.png?alt=media&token=cec9e2ba-a343-4180-876b-b34fa2ffdba4',
    video: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/videos%2Fmac.mp4?alt=media&token=b483f019-8605-4d9e-9463-c877c5b6e401',
    name: 'Mac',
    icon: 'fa-apple',
    class: 'mac',
		widthModifier: '78%'
  },
  {
    canvas: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/images%2Fiphone_mockup-66775c8d53.png?alt=media&token=1d78a7d3-8960-4d1d-8a9e-6467aa8fa4bf',
    video: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/videos%2Fios_video.mp4?alt=media&token=37f9576e-059f-4410-a6f5-5d91093906bb',
    name: 'iPhone',
    icon: 'fa-apple',
    class: 'iphone',
		widthModifier: '92%'
  },
  {
    canvas: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/images%2Fandroid_mockup-35765a7008.png?alt=media&token=373bd08f-018b-43bd-9feb-27655f0886c1',
    video: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/videos%2Fandroid_video.mp4?alt=media&token=7f45bbaa-eb91-47ed-bd13-1c92a5d25c2d',
    name: 'Android',
    icon: 'fa-google-play',
    class: 'android',
		widthModifier: '93%'
  },
  {
    canvas: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/images%2Fdesktop_mockup-4d79a1ff4b.png?alt=media&token=c69bdf62-dcb6-4e9e-a579-0570890642c6',
    video: 'https://firebasestorage.googleapis.com/v0/b/rave-clone.appspot.com/o/videos%2Fwindows.mp4?alt=media&token=81882c82-3fe3-4790-95b7-0320a60be725',
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