// export enum CustomMediaEnum {
//   MAX_MOBILE = 'max-width: 767px',
//   MIN_TABLET = 'min-width: 768px',
//   MIN_DESKTOP = 'min-width: 1120px',
//   MAX_SETTINGS = '@media (min-width: 450px)',
// }

const maxMobileQuery = `@media (max-width: 767px)`;
const minTabletQuery = `@media (min-width: 768px)`;
const minDesktopQuery = `@media (min-width: 1120px)`;
const maxSettingsQuery = `@media (min-width: 450px)`;

export default {
  maxMobileQuery,
  minTabletQuery,
  minDesktopQuery,
  maxSettingsQuery,
};
