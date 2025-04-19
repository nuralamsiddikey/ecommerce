import { execSync } from 'child_process';


const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Error: Table name is required');
  process.exit(1);
}

const tableName = args[0];

try {
  execSync(`npx sequelize-cli seed:generate --name ${tableName}`, {
    stdio: 'inherit',
  });
} catch (error) {
  console.error('Error generating seeder:', error.message);
  process.exit(1);
}
