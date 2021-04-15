import {runAppleScriptAsync} from 'run-applescript';

export default async function finderPath() {
	return runAppleScriptAsync('tell app "Finder" to POSIX path of (insertion location as alias)');
}
