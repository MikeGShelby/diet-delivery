module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }

        return word;
    },
    format_url: url => {
        return url
          .replace('http://', '')
          .replace('https://', '')
          .replace('www.', '')
          .split('/')[0]
          .split('?')[0];
    },
    format_img_alt: imgPath => {
      return imgPath
        .replace('images/', '')
        .split('.')[0]
    },
    format_display_name: email => {
      return email
        .split('@')[0]
    }
}