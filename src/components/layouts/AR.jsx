// import { ModelViewerElement } from '@google/model-viewer';
// import '@google/model-viewer';

const OPTIONS = {
	iosSrc: '',
	poster: 'https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717',
	alt: 'Asian Shoes 3D',
	style: { width: '100vw', height: '68vh' },
	arModes: 'webxr scene-viewer quick-look',
	shadowIntensity: '2',
	touchAction: 'pan-y',
	shadowSoftness: '0',
	exposure: '0.52',
	cameraControls: true,
	autoRotate: true,
	ar: true,
};

export default function AR({ src = '/models/ShoeBlueAndWhite.glb' }) {
	return (
		<>
			<div className="absolute top-16 w-full min-h-[77vh] flex justify-center cursor-grab  bg-[#000300] hover:bg-[#000400] rounded-3xl">
				<model-viewer
					src={src}
					ios-src=""
					poster="/woodblocks.gif"
					alt="Asian Shoes 3D"
					style={{
						width: '100%',
						minHeight: '72vh',
						outline: 'none',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					className="overflow-y-visible bg-scroll border-none outline-none focus-within:outline-none focus:outline-none focus-visible:outline-none peer-focus-within:outline-none peer-focus:outline-none peer-focus-visible:outline-none bg-[#171035]"
					ar-modes="webxr scene-viewer quick-look"
					shadow-intensity="2"
					touch-action="pan-y"
					shadow-softness="0"
					exposure="0.52"
					camera-controls
					auto-rotate
					outline="none"
					ar
				>
					<button slot="ar-button" className="bg-gray-200 rounded-md p-2 absolute top-2 right-2 z-20">
						View in My Space
					</button>
				</model-viewer>
			</div>
		</>
	);
}
