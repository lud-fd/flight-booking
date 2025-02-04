import { useTranslation } from 'next-i18next';

export default function FlightSearchBar() {
  const { t } = useTranslation();

  return (
    <div>
      <label>{t('from')}</label>
      <input type="text" />
    </div>
  );
}
