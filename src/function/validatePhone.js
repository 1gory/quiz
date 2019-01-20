const PHONE_LENGHT = 11;

export default phone => (phone.replace(/[\W_]+/g, '').length === PHONE_LENGHT);
