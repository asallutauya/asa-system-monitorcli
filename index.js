const si = require('systeminformation');
const chalk = require('chalk');

async function displaySystemInfo() {
    console.log(chalk.yellow('Gathering system information...'));

    try {
        const cpu = await si.cpu();
        const memory = await si.mem();
        const battery = await si.battery();
        const temp = await si.cpuTemperature();

        console.log(chalk.green('CPU Information:'));
        console.log(`Manufacturer: ${cpu.manufacturer}`);
        console.log(`Brand: ${cpu.brand}`);
        console.log(`Speed: ${cpu.speed} GHz`);
        console.log(`Cores: ${cpu.cores}`);
        console.log(`Physical Cores: ${cpu.physicalCores}`);

        console.log(chalk.green('\nMemory Information:'));
        console.log(`Total: ${(memory.total / (1024 ** 3)).toFixed(2)} GB`);
        console.log(`Used: ${(memory.used / (1024 ** 3)).toFixed(2)} GB`);

        console.log(chalk.green('\nBattery Information:'));
        console.log(`Battery Status: ${battery.isCharging ? 'Charging' : 'Not Charging'}`);
        console.log(`Battery Level: ${battery.percent}%`);

        console.log(chalk.green('\nTemperature Information:'));
        console.log(`CPU Temperature: ${temp.main} °C`);
    } catch (error) {
        console.error(chalk.red('Failed to retrieve system information.'));
    }
}

displaySystemInfo();
