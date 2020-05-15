import { SpawnOptions } from 'child_process';

/**
 * 运行命令 (spawn)
 * @async
 */
async function spawn(
    /**
     * 命令字符串
     */
    cmd: string,
    options: SpawnOptions
): Promise<void>;

export default spawn;
