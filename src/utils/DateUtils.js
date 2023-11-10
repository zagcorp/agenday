export default class DateUtils {
    static formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };
}