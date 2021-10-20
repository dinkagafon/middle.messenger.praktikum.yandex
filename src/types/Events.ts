type Events = {
  [index: string]: (e: MouseEvent, comp?: object) => void
};

export default Events;
