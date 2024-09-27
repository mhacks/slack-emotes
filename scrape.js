// paste this into the inspect element console to scrape the names (without colons) of the emote rows in the table
// you will need this because the images will have uuid file names and you need valid slack emoji names for the bulk upload chrome extension to work
Array.from(document.querySelectorAll('.c-table_view_row_item_value')).map(elem => elem.innerText).filter(str => str[0] === ':').map(str => str.slice(1, str.length - 1))

// paste this into the inspect element console to scrape the urls of emote images
Array.from(document.querySelectorAll('img.p-customize_emoji_list__image')).map(image => image.src)
