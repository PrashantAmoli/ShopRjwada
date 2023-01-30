import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import QRPage from '@/pages/qr';

export default function QRModal({ modalOpen, setModalOpen }) {
	// const dispatch = useDispatch();
	// const modalOpen = useSelector(state => state.movies.modalOpen);
	// const modalData = useSelector(state => state.movies.modalData);

	function handleClose() {
		// dispatch(closeModal());
		setModalOpen(false);
	}

	function handleOpen() {
		// dispatch(openModal());
		setModalOpen(true);
	}

	return (
		<>
			{/* <div className="fixed inset-0 flex items-center justify-center">
				<button
					type="button"
					onClick={() => handleOpen({ id: 1, title: 'test' })}
					className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Open dialog
				</button>
			</div> */}

			<Transition appear show={modalOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={handleClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-xl flex flex-col justify-center h-[66vh] sm:h-[85vh] transform overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl p-2 pb-6 sm:p-6 text-left align-middle shadow-xl transition-all select-none">
									<Dialog.Title
										as="h3"
										className="text-xl font-medium leading-6 text-head bg-white/50 backdrop-blur-3xl absolute -top-4 -left-4 p-3 pt-8 px-8 w-10/12 sm:w-max rounded-3xl shadow-2xl"
									></Dialog.Title>

									<QRPage />
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
