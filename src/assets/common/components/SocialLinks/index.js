import { ReactComponent as MailIcon } from '../../../icons/envelope-regular.svg';
import { ReactComponent as DribbbleIcon } from '../../../icons/dribbble.svg';
import { ReactComponent as GithubIcon } from '../../../icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../../../icons/linkedin.svg';

import './SocialLinks.scss';

const IconClass = 'SocialLinks__link__icon';

const socialLinksList = [
    {
        id: 'Mail',
        icon: <MailIcon className={IconClass} />,
        href: 'mailto:hey@fvkvn.be',
        platform: 'Mail',
    }, {
        id: 'Github',
        icon: <GithubIcon className={IconClass} />,
        href: 'https://github.com/FVKVN',
        platform: 'Github',
    }, {
        id: 'Dribbble',
        icon: <DribbbleIcon className={IconClass} />,
        href: 'https://dribbble.com/FVKVN',
        platform: 'Dribbble',
    }, {
        id: 'Linkedin',
        icon: <LinkedinIcon className={IconClass} />,
        href: 'https://www.linkedin.com/in/kevin-fiv%C3%A9-b2231868/',
        platform: 'LinkedIn',
    },
];

export default function SocialLinks() {
    return (
        <aside className="SocialLinks">
            <ul className="SocialLinks__list">
                { socialLinksList.map((listItem) => (
                    <li className="SocialLinks__list__item" key={listItem.id}>
                        <a href={listItem.href} className="SocialLinks__link" rel="nofollow">
                            {listItem.icon}
                            <span className="SocialLinks__list__item__platform">
                                {listItem.platform}
                            </span>
                        </a>
                    </li>
                )) }
            </ul>
        </aside>
    );
}
