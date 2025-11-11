| Description | Input | Output |
| --- | --- | --- |
| Simple increment of a normal day | 15-03-2021 | 16-03-2021 |
|  change month and date from 30 day month to 1st of the next month | 30-11-2024 | 01-12-2024|
|  change month and date from 31 day month to 1st of the next month | 31-05-2023 | 01-06-2023|
|  handle out of Range date for 30 day month| 31-04-2023 | "Invalid Date" |
|  handle out of Range date for 31 day month | 32-03-2021 | "Invalid Date" |
|  change month and date for February in a leap year | 29-02-2024 | 01-03-2024|
|  change month and date for February in a non-leap year | 28-02-2023 | 01-03-2023|
|  handle out of Range date for February in a non-leap year | 29-02-2023 | "Invalid Date" |
|  handle out of Range date for February in a leap year | 30-02-2024 | "Invalid Date" |
|  change year and month and date from any year to next year while also resetting date and month to 1 | 31-12-2024 | 01-01-2025|
|  handle zero as date, month, and year | 00-00-0000 | "Invalid Date" |
|  handle out of range month in a given year | 12-13-2023 | "Invalid Date" |
| | | |