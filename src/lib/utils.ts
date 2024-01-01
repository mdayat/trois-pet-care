const joinStringToHyphen = (string: string, separator: string) => {
	return string.split(separator).join("-");
};

export { joinStringToHyphen };
