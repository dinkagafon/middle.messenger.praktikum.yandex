import imageURL from '../../static/img/avatar.jpg';

const getAvatar = (link: string | undefined | null) => (link ? `https://ya-praktikum.tech/api/v2/resources${link}` : imageURL);

export default getAvatar;
