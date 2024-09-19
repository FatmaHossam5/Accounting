import React from 'react';
import CustomModal from '../CustomModal/CustomModal';
import ModalFooter from '../ModalFooter/ModalFooter';

export default function ConfirmDelete({ isOpen, onCancel, onConfirm, deleteMsg }) {

    const handleCancle = () => onCancel()

    const confirmationDelete = () => {
        onConfirm()
        handleCancle()
    }

    return (
        <>
            <CustomModal
                isOpen={isOpen}
                onCancel={handleCancle}
                showHeader={false}>
                <div className='d-flex justify-content-center'>
                    <svg width={74} height={74} viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M36.9998 67.8334C19.9706 67.8334 6.1665 54.0293 6.1665 37.0001C6.1665 19.9708 19.9706 6.16675 36.9998 6.16675C54.0291 6.16675 67.8332 19.9708 67.8332 37.0001C67.8332 54.0293 54.0291 67.8334 36.9998 67.8334ZM36.9998 64.1334C44.196 64.1334 51.0975 61.2747 56.186 56.1862C61.2745 51.0978 64.1332 44.1963 64.1332 37.0001C64.1332 29.8039 61.2745 22.9024 56.186 17.8139C51.0975 12.7254 44.196 9.86675 36.9998 9.86675C29.8036 9.86675 22.9022 12.7254 17.8137 17.8139C12.7252 22.9024 9.8665 29.8039 9.8665 37.0001C9.8665 44.1963 12.7252 51.0978 17.8137 56.1862C22.9022 61.2747 29.8036 64.1334 36.9998 64.1334ZM34.9648 19.829H39.0348L38.7604 41.5973H35.2423L34.971 19.829H34.9648ZM36.9998 52.6418C36.6606 52.646 36.3239 52.5822 36.0097 52.4543C35.6955 52.3264 35.41 52.1369 35.1701 51.897C34.9302 51.6571 34.7407 51.3716 34.6128 51.0574C34.4849 50.7431 34.4211 50.4065 34.4253 50.0673C34.419 49.7274 34.4813 49.3898 34.6084 49.0746C34.7356 48.7594 34.925 48.4731 35.1654 48.2328C35.4057 47.9924 35.692 47.803 36.0072 47.6759C36.3224 47.5487 36.66 47.4864 36.9998 47.4927C38.4675 47.4927 39.5744 48.6027 39.5744 50.0673C39.5807 50.4071 39.5184 50.7447 39.3912 51.0599C39.2641 51.3751 39.0747 51.6614 38.8343 51.9017C38.594 52.1421 38.3077 52.3315 37.9925 52.4586C37.6773 52.5858 37.3397 52.6481 36.9998 52.6418Z" fill="#FF6B6B" />
                    </svg>
                </div>
                <div className='d-flex justify-content-center'>
                    <h5 className='text-center'>
                        {` Are you sure you want to delete this
                        ${deleteMsg}?`}
                    </h5>
                </div>
                <div className='d-flex justify-content-center'>
                    <ModalFooter
                        submitText="Yes,Delete"
                        className2={'delete-color'}
                        className={'delete-cancel'}
                        onCancle={handleCancle}
                        onSubmit={confirmationDelete}
                    />
                </div>
            </CustomModal>
        </>
    )
}
