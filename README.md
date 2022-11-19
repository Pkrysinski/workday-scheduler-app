# workday-scheduler-app

## Purpose

The purpose of developing the workday scheduler app is to help anyone who uses it schedule out blocks of time for their workday.  The app will allow users to save calendar/schedule-based events into hours of the day, with data that saves and persists in local storage.  The app will be connected to the DayJS library which gives the ability to have time-based styling depending on what time of day it is (past events will be grey, current will be red, and future will be green).

## Link to Deployed Application

https://pkrysinski.github.io/workday-scheduler-app/

![Alt text](https://github.com/Pkrysinski/workday-scheduler-app/blob/main/assets/images/github-screenshot.PNG)

## Acceptence Criteria Notes

GIVEN I am using a daily planner to create a schedule...

- - - - -
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
>Added logic in JS file to take care of this.  Created a displayDay() function which uses the DayJS library (already linked in HTML), and then calling of displayDay() function on initialization.

- - - - -
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

- - - - -
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

- - - - -
WHEN I click into a timeblock
THEN I can enter an event

- - - - -
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

- - - - -
WHEN I refresh the page
THEN the saved events persist
