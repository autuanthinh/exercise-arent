class Utils {
  paginate<T>(array: T[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
}

export default new Utils();
