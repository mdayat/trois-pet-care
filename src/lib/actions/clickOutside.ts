import type { Action, ActionReturn } from "svelte/action";

interface ClickOutsideParams {
	excludedEls: Array<HTMLElement> | HTMLElement;
}

interface ClickOutsideAttributes {
	"on:clickOutside": (event: Event) => void;
}

const clickOutside: Action<
	HTMLElement,
	ClickOutsideParams | undefined,
	ClickOutsideAttributes
> = (
	node,
	params
): ActionReturn<ClickOutsideParams | undefined, ClickOutsideAttributes> => {
	const handleClickOutside = (event: MouseEvent) => {
		const isClickedOutside = !node.contains(event.target as Node);

		if (isClickedOutside) {
			if (params === undefined) {
				node.dispatchEvent(new Event("clickOutside"));
				return;
			}

			if (Array.isArray(params.excludedEls)) {
				for (const excludedEl of params.excludedEls) {
					const isInclusiveDescendant = excludedEl.contains(
						event.target as Node
					);

					if (event.target === excludedEl || isInclusiveDescendant) continue;
					node.dispatchEvent(new Event("clickOutside"));
				}
			} else {
				const isInclusiveDescendant = params.excludedEls.contains(
					event.target as Node
				);

				if (event.target !== params.excludedEls && !isInclusiveDescendant) {
					node.dispatchEvent(new Event("clickOutside"));
				}
			}
		}
	};

	window.addEventListener("click", handleClickOutside, true);
	return {
		destroy: () => {
			window.removeEventListener("click", handleClickOutside, true);
		},
	};
};

export { clickOutside };
