type Events = {
  [index: string]: (e: Event, comp?: object) => void
};

export default Events;
