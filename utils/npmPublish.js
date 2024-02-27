// 1.获取版本号
// 2.增加版本号
// 3.推送发布
const fs = require('fs');
const { exec } = require('child_process');

function incrementVersionAndPublish(packageJsonPath) {
    fs.readFile(packageJsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading package.json:', err);
            return;
        }

        try {
            const packageJson = JSON.parse(data);
            const currentVersion = packageJson.version;
            const [major, minor, patch] = currentVersion.split('.').map(Number);

            let newMajor = major;
            let newMinor = minor;
            let newPatch = patch + 1;

            if (newPatch === 10) {
                newPatch = 0;
                newMinor += 1;
            }

            if (newMinor === 10) {
                newMinor = 0;
                newMajor += 1;
            }

            const newVersion = `${newMajor}.${newMinor}.${newPatch}`;

            packageJson.version = newVersion;

            fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing package.json:', err);
                    return;
                }

                console.log('版本更新到', newVersion);

                // 更改工作目录到 package.json 所在目录
                const packageDir = packageJsonPath.split('/').slice(0, -1).join('/');
                process.chdir(packageDir);

                // 执行 npm publish 命令
                exec('npm publish --access public', (error, stdout, stderr) => {
                    if (error) {
                        console.error('Error publishing package:', error);
                        return;
                    }
                    console.log('包发布成功!');
                    console.log(stdout);
                });
            });
        } catch (error) {
            console.error('Error parsing package.json:', error);
        }
    });
}

// 调用示例
const packageJsonPath = '../npm-publish/utils/package.json'; // 替换成你的 package.json 路径
incrementVersionAndPublish(packageJsonPath);


