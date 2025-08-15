// Local offline image analysis stub. Replace with TFLite or TFJS integration if needed.
export type LocalAnalysisResult = {
	labels: Array<{ description: string; score: number }>;
	advice?: string;
};

export async function analyzeImageLocal(imageBase64: string): Promise<LocalAnalysisResult> {
	// Naive heuristic placeholder: return a generic result without external deps.
	if (!imageBase64) throw new Error('imageBase64 is required');
	return {
		labels: [
			{ description: 'leaf', score: 0.6 },
			{ description: 'plant', score: 0.55 },
		],
		advice: 'Offline mode: unable to detect specific disease. Check moisture and sunlight, remove affected leaves.',
	};
}