type Events = {
  [index: string]: (e: MouseEvent | KeyboardEvent, comp?: object) => void
};

export default Events;
