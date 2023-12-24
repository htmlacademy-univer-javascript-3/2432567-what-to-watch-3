import {
  getLevel,
  humanizeFormate,
  durationFormate,
  getRemainTime,
  getRating
} from './utils.ts';

describe('Util functions tests', () => {
  describe('getFormattedTime function', () => {
    it('should return correct time with minutes and hours', () => {
      const minutes = 544;
      const result = durationFormate(minutes);
      expect(result).toEqual('9h 4m');
    });
  });

  describe('getFormattedDate function', () => {
    it('should return date in format "Month 01, 2000"', () => {
      const date = '2016-06-02T14:41:36-00:00';
      const result = humanizeFormate(date);
      expect(result).toEqual('June 02, 2016');
    });
  });

  describe('getTimeLeft function', () => {
    it('should return time left in format "-H:MM:SS" if time more then hour', () => {
      const seconds = 5674;
      const result = getRemainTime(seconds);
      expect(result).toEqual('-1:34:34');
    });

    it('should return time left in format "-MM:SS" if time less then hour', () => {
      const seconds = 2382;
      const result = getRemainTime(seconds);
      expect(result).toEqual('-39:42');
    });
  });

  describe('getFormattedRating function', () => {
    it('should return rating with one digit after comma if number is round', () => {
      const rating = 6;
      const result = getRating(rating);
      expect(result).toEqual('6.0');
    });

    it('should return rating with one digit after comma if them more then one', () => {
      const rating = 6.26;
      const result = getRating(rating);
      expect(result).toEqual('6.3');
    });
  });

  describe('getFilmGrade function', () => {
    it('should return "Bad" if rating less then 3', () => {
      const rating = 2;
      const result = getLevel(rating);
      expect(result).toEqual('Bad');
    });

    it('should return "Good" if rating between 5 and 8', () => {
      const rating = 7.44;
      const result = getLevel(rating);
      expect(result).toEqual('Good');
    });

    it('should return "Awesome" if rating more or equal then 10', () => {
      const rating = 42;
      const result = getLevel(rating);
      expect(result).toEqual('Awesome');
    });

    it('should return "Bad" if rating less then 0', () => {
      const rating = -42;
      const result = getLevel(rating);
      expect(result).toEqual('Bad');
    });
  });
});
