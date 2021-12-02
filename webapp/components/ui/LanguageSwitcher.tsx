import { Button, Menu, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react';
import i18nConfig from '../../i18n.json';
import { MdTranslate } from 'react-icons/md';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useTranslation from 'next-translate/useTranslation';


const { locales } = i18nConfig;


const LANGUAGE = {
  fr: 'Français',
  en: 'English',
};



const LanguageSwitcher = () => {
    const router = useRouter();
    const { t } = useTranslation('index');
    return (
        <Menu closeOnSelect autoSelect={false}>
        <MenuButton
        aria-label={t('nav.lang')}
        variant="ghost"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        >
        <MdTranslate size={18} />
        </MenuButton>
        <MenuList minWidth={0}>
        {locales.map(locale => (
            <MenuItem key={locale} fontSize='md'>
            <NextLink href={router.asPath} locale={locale} passHref>
                <Link>{LANGUAGE[locale]}</Link>
            </NextLink>
            </MenuItem>
        ))}
        </MenuList>
    </Menu>
    );
    };

export default LanguageSwitcher