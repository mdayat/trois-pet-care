import type { Action, ActionReturn } from "svelte/action";

interface TrapFocusParams {
	trapFocusTrigger: HTMLElement;
}

interface TrapFocusAttributes {
	"on:pressESC": (event: Event) => void;
}

const trapFocus: Action<HTMLElement, TrapFocusParams, TrapFocusAttributes> = (
	node,
	{ trapFocusTrigger }
): ActionReturn<TrapFocusParams, TrapFocusAttributes> => {
	function getFocusableEls(): NodeListOf<HTMLElement> {
		return node.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		);
	}

	const focusableEls = getFocusableEls();
	const firstFocusableEl = focusableEls[0];
	const lastFocusableEl = focusableEls[focusableEls.length - 1];
	firstFocusableEl.focus();

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			event.preventDefault();
			event.stopPropagation();
			trapFocusTrigger.focus();
			node.dispatchEvent(new Event("pressESC"));
			return;
		}

		if (event.key !== "Tab") return;
		const currentActiveEl = document.activeElement;

		if (event.shiftKey && currentActiveEl === firstFocusableEl) {
			lastFocusableEl.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && currentActiveEl === lastFocusableEl) {
			firstFocusableEl.focus();
			event.preventDefault();
		}
	}

	node.addEventListener("keydown", handleKeyDown);
	return {
		destroy: () => {
			node.removeEventListener("keydown", handleKeyDown);
		},
	};
};

export { trapFocus };
