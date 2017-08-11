# ScheduledNotification
ScheduledNotification

Install node-schedule.

1
npm install node-schedule
Using the node-schedule to schedule a job to run at a specific time on a specific date. In this first example, the node-schedule module is imported and saved in the variable cron.

1
2
3
4
5
6
var cron = require('node-schedule');
/* run the job at 18:55:30 on Dec. 14 2018*/
var date = new Date(2018, 11, 14, 18, 56, 30);
cron.scheduleJob(date, function(){
    console.log(new Date(), "Somthing important is going to happen today!");    
});
Schedule a recurring job using the RecurrenceRule, example 1.

1
2
3
4
5
var rule = new cron.RecurrenceRule();
rule.second = 30;
cron.scheduleJob(rule, function(){
    console.log(new Date(), 'The 30th second of the minute.');
});
Schedule a recurring job using the RecurrenceRule, example 2.

1
2
3
4
5
6
7
8
/* This runs at 3:10AM every Friday, Saturday and Sunday. */
var rule2 = new cron.RecurrenceRule();
rule2.dayOfWeek = [5,6,0];
rule2.hour = 3;
rule2.minute = 10;
cron.scheduleJob(rule2, function(){
    console.log('This runs at 3:10AM every Friday, Saturday and Sunday.');
});
Specify the schedule as an object literal.

1
2
3
4
/* This runs at 2:30AM on every Sunday */
cron.scheduleJob({hour: 2, minute: 30, dayOfWeek: 0}, function(){
    console.log('This runs at 2:30AM on every Sunday');
});
Specify the schedule in unix cron syntax.

1
2
3
4
/* This runs at the 30th mintue of every hour. */
cron.scheduleJob('30 * * * * *', function(){
    console.log('This runs at the 30th mintue of every hour.');
});
Questions
What is ssh2?

ssh stands for secure shell, it provides an encrypted channel for logging into another computer and do things on that computer from your computer. ssh2 is an upgrade of ssh, which makes ssh2 more secure and efficient. ssh and ssh2 usually comes with the default command line shell in your operating system, and you can just use them. But if you find yourself doing a routine task everyday such as log into a server, and run a command line on that server and then logout. You are tired of doing this manually everyday and you want to write a program to do it for you. In this case, a php program. Since ssh or ssh2 is not built in within the core php, you will need to install the php ssh2 extension in order write the php program to do this boring daily task for you.

What is apt-get?

apt-get is a default package manager tool in Ubuntu, which you can use it to install new software packages in Ubuntu.

What is mac port?

mac port is a default package manager tool in Mac, which you can use it to install new software packages in Mac.

What is homebrew?

homebrew is a very popular open source package manager tool for Mac, you can download it from brew.sh Some people find it easier and better than the default package manager.
