import closeIcon from '/assets/icon-close.svg';
import {
  CloseButton,
  SettingsBackground,
  SettingsButton,
  SettingsContainer,
  SettingsHeader,
} from './settings.styled';
import Form from '../form/Form';
import { useRef } from 'react';

const Settings = () => {
  const dialogRef = useRef(null);

  const openMenu = () => {
    const dialogEl = dialogRef.current;
    if (dialogEl) {
      dialogEl.showModal();
    }
  };
  const closeMenu = () => {
    const dialogEl = dialogRef.current;
    if (dialogEl) {
      dialogEl.close();
    }
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <SettingsBackground>
          <SettingsContainer>
            <SettingsHeader>
              <h2>Settings</h2>
              <CloseButton onClick={closeMenu}>
                <img src={closeIcon} alt='Close settings button' />
              </CloseButton>
            </SettingsHeader>
            <Form />
          </SettingsContainer>
        </SettingsBackground>
      </dialog>
      <SettingsButton onClick={openMenu}>
        <img src='/assets/icon-settings.svg' />
      </SettingsButton>
    </>
  );
};

export default Settings;
