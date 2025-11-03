const riskForm = document.getElementById('risk-form');
const riskMatrixDiv = document.getElementById('risk-matrix');

riskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const serviceModel = document.getElementById('service-model').value;
    const riskType = document.getElementById('risk-type').value;
    const impactLevel = document.getElementById('impact-level').value;
    const likelihoodLevel = document.getElementById('likelihood-level').value;

    const riskMatrix = generateRiskMatrix(serviceModel, riskType, impactLevel, likelihoodLevel);
    riskMatrixDiv.innerHTML = riskMatrix;
});

function generateRiskMatrix(serviceModel, riskType, impactLevel, likelihoodLevel) {
    let riskScore = calculateRiskScore(impactLevel, likelihoodLevel);
    let riskLevel = getRiskLevel(riskScore);

    let riskMatrix = `
        <table>
            <tr>
                <th>Service Model</th>
                <th>Risk Type</th>
                <th>Impact Level</th>
                <th>Likelihood Level</th>
                <th>Risk Score</th>
                <th>Risk Level</th>
            </tr>
            <tr>
                <td>${serviceModel}</td>
                <td>${riskType}</td>
                <td>${impactLevel}</td>
                <td>${likelihoodLevel}</td>
                <td>${riskScore}</td>
                <td>${riskLevel}</td>
            </tr>
        </table>
    `;

    return riskMatrix;
}

function calculateRiskScore(impactLevel, likelihoodLevel) {
    let impactScore = getScore(impactLevel);
    let likelihoodScore = getScore(likelihoodLevel);
    return impactScore * likelihoodScore;
}

function getScore(level) {
    switch (level) {
        case 'Low':
            return 1;
        case 'Medium':
            return 2;
        case 'High':
            return 3;
        default:
            return 0;
    }
}

function getRiskLevel(score) {
    if (score <= 2) {
        return 'Low';
    } else if (score <= 4) {
        return 'Medium';
    } else {
        return 'High';
    }
}
