import { registerDecorator, ValidationOptions } from 'class-validator';

/**
 * @param property
 * @param validationOptions
 */
export function IsDDMMYYYY(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDDMMYYYY',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          const ddmmyyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/;

          if (value.match(ddmmyyyyRegex) === null) {
            return false;
          }

          const [day, month, year] = value.split('/');
          const isoFormattedStr = `${year}-${month}-${day}`;

          const isoDate = new Date(isoFormattedStr);
          const dateConvertedToTimestamp = isoDate.getTime();

          if (
            typeof dateConvertedToTimestamp !== 'number' ||
            Number.isNaN(dateConvertedToTimestamp)
          ) {
            return false;
          }

          return true;
        },
        defaultMessage() {
          return `${propertyName} is not a valid dd/mm/yyyy date`;
        },
      },
    });
  };
}
