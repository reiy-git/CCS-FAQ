/**
 * Central document list — single source of truth for the chat list.
 * To add a doc: add an entry here. Everything else reads from this array.
 *
 * url: null = placeholder modal. Set a published Google Docs embed URL to iframe it.
 * gformUrl: optional Google Forms link for "Inquire" action.
 */

import ucLogo from '../assets/UCLogo.png'
import ccsLogo from '../assets/CCS Logo.png'
import acssLogo from '../assets/ACSS.png'
import sitesLogo from '../assets/SITES.png'

export const documents = [
  {
    id: 'rate',
    title: 'Give your feedback!',
    subtitle: 'Give your feedback to the CCS office!',
    icon: 'fa-star',
    iconBg: 'bg-tiger/20',
    iconColor: 'text-tiger',
    url: 'https://feedback.pnc.edu.ph/login',
    urleditable:'https://feedback.pnc.edu.ph/login',
    description: 'PNC Feedback Site — rate and give feedback to the ccs office.',
    time: 'now',
    unread: 0,
    online: true,
  },
  {
    id: 'special',
    title: 'Special Examination Form',
    subtitle: 'Tap to know how to take your special exam ',
    icon: 'fa-clipboard-list',
    iconBg: 'bg-paprika/20',
    iconColor: 'text-tiger',
    url: 'https://docs.google.com/document/d/e/2PACX-1vTGXejk70rKVLQPlWO9z2p-0UoG6ldRf4EjmSxVBOA9pq3eXLMG_ZCQUYmq14NHE0LATrAViDuoomca/pub',
    description: 'Special examination form and guidelines.',
    time: 'Exam period/ a week after',
    unread: 0,
    online:true,
    urleditable:'https://docs.google.com/document/d/1uigr5XSeRLxZYCtoiN3USBtK2hy2WlEOnl1zvg_TudQ/edit?usp=drive_link',
  },
  {
    id: 'dropping',
    title: 'Dropping/transferring/leave of absence',
    subtitle: 'View process & requirements guidlines',
    icon: 'fa-right-left',
    iconBg: 'bg-ochre/20',
    iconColor: 'text-tiger',
    url: 'https://docs.google.com/document/d/e/2PACX-1vRjgsicay6Cf0uY0EfbmjylRVugaXn5RFffm6LOTs5vb4gxAL3rQDPacL8gDVBx4TGbJtX-GxwiKQGB/pub',
    description: 'Step-by-step process and requirements for dropping or transferring courses.',
    time: 'prelims - midterms',
    unread: 0,
    online: true,
    urleditable:'https://docs.google.com/document/d/1x9T1bGlTY4uK9kdzg_oDmgsGlgN0VcQ8t3yzPYGziTI/edit?usp=drive_link',
  },
  {
    id: 'sasd',
    title: 'CCS coding sheet',
    subtitle: 'To request a coded letter from the college secretary',
    icon: 'fa-file-code',
    iconBg: 'bg-brandy/30',
    iconColor: 'text-tiger',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJZ2bWOVLMbUkuPCdx4OGtB9HgrkW9WXq21t2426k0Q8S_jDPAhbNSabySPm89kvVwTjhgJ1lEstlG/pubhtml?gid=0&single=true',
    description: 'Structured Analysis & Structured Design coding sheet with guide and remarks.',
    time: 'now',
    unread: 0,
    online: true,
    urleditable:'https://docs.google.com/spreadsheets/d/13pOeoYVJNjZHKSmaU8LWjPOBcp8k-DXmLlgOU7cSy5Q/',
  },
]

/**
 * Stories row — quick-access links replacing Messenger "stories".
 * Each opens an external page in a new tab.
 */
export const stories = [
  {
    id: 'uc-fb',
    label: 'UC Facebook',
    image: ucLogo,
    url: 'https://www.facebook.com/ucpncofficial',
  },
  {
    id: 'college',
    label: 'CCS-Student Government',
    image: ccsLogo,
    url: 'https://www.facebook.com/PNC.CCS',
  },
  {
    id: 'acss',
    label: 'ACSS',
    image: acssLogo,
    url: 'https://www.facebook.com/ACSS.PNC', // placeholder — replace with real URL
  },
  {
    id: 'sites',
    label: 'SITeS',
    image: sitesLogo,
    url: 'https://www.facebook.com/PnCSITeS',
  },
  
]

/** Google Form link for the "Inquire" button (Add New slot). */
export const inquireFormUrl = 'https://forms.gle/G2V2v7drMcdUNN2BA'

