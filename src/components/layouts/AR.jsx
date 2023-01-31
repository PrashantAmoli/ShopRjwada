import Script from 'next/script';
import '@google/model-viewer';

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

export default function AR({ product }) {
	return (
		<>
			<Script
				src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
				onLoad={() => console.log('Model Viewer Loaded')}
				onReady={() => console.log('Model Viewer Ready')}
				onError={() => console.log('Model Viewer Error')}
			/>

			<div className="absolute top-16 md:top-20 lg:top-28 w-full min-h-[68vh] flex justify-center rounded-xl cursor-grab">
				<model-viewer
					src="/models/ShoeBlueAndWhite.glb"
					ios-src=""
					poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
					alt="Asian Shoes 3D"
					style={{ width: '100vw', height: '68vh' }}
					ar-modes="webxr scene-viewer quick-look"
					shadow-intensity="2"
					touch-action="pan-y"
					shadow-softness="0"
					exposure="0.52"
					camera-controls
					auto-rotate
					ar
				>
					{/* <button slot="ar-button" className="bg-gray-200 rounded-md p-2 absolute top-2 right-2 z-50">
						View in My Space
					</button> */}
				</model-viewer>
			</div>
		</>
	);
}
