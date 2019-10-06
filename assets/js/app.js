const availableTags = ["Abortion", "absolute nonviolence", "absolute right", "acrasia (Gr.)", "academic ethics", "absolutism", "absolute value", "act", "absolute pacifism", "act-agapeism", "act-consequentialism", "act-deontological ethics", "act-deontologism", "action", "action-based ethics", "action-centered ethics", "action, philosophy of", "action, reasons for", "action theory", "action, theory of", "acts/ommissions doctrine", "act-utilitarianism", "agape (Gr.)", "actual obligation", "acts of ommission", "acts of commission", "actualism", "active euthanasia", "active nonviolence", "act /ommission distinction", "actual duty", "agapeism", "agathology", "agathon (Gr).", "agency", "agent", "agent-based ethics", "agent-causation", "agent-neutral value", "agent-relative morality", "agent-centered ethics", "agent-centered morality", "agent morality", "agent-relative value", "agricultural ethics", "ahimsa (Skt).", "akrasia (Gr.)", "all-things-considered duty", "all-things-considered reason", "altruism", "amoral", "amoralism", "analytic(-al) ethics", "animal ethics", "animal rights", "antinomianism", "anti-realism", "anti-warism", "apatheia (Gr).", "apathy", "applied ethics", "applied philosophy", "aretaic ethics", "aretology", "Arête(Gr.)", "aretology", "art, ethics of", "ascriptivism", "assisted suicide", "ataraxia (Gr).", "ataraxy", "attitude", "authenticity", "autonomy", "autonomy of ethics", "autonomy of will", "autonomy, principle of", "axiological ethics", "axiology", "bad", "bad faith", "bad in itself", "bad-making feature", "bad-making quality", "badness", "basic action", "being ethics", "being, ethics of", "belief-desire theory", "belief, ethics of", "benevolence", "bioethics", "biomedical ethics", "bios praktikos", "bios theoreticos (Gr).", "bonum in se (L).", "boo-hoorah theory", "business ethics", "capacity responsibility", "cardinal virtues", "care", "ecare ethics", "care, ethics of", "caring, ethics of", "Caritas(L).", "casuistic ethics", "casuistry", "categorical imperative", "causal responsibility", "character", "charily", "choice", "Christian Situation ethics", "classical utilitarianism", "clinical ethics", "cognitivism", "collective responsibility", "commission, acts of", "commission, duties of", "commission / ommission distinction", "Common good", "common sense morality", "communicational ethics", "communication ethics", "communicative ethics", "communitarianism", "commutative justice", "comparative ethics", "compatibilism", "complementarity ethics", "con-attitude", "conditional imperative", "conditional nonviolence", "conditional pacifism", "conduct, ethics of", "conflict of duties", "conscience", "consequentialism", "contextualism", "contractarianism", "contract theory", "contractivism", "contractualism", "contributive value", "contributory value", "conventionalism", "core morality", "corrective justice", "correctional ethics", "courage", "criminal justice", "criminal justice ethics", "critical ethics", "cultural relativism", "death with dignity", "decision", "decisionism", "decision theory", "definism", "definist fallacy", "deliberation", "deontics", "deontic terms", "deontological ethics", "deontologism", "deontology", "dependency thesis", "descriptive ethics", "descriptive morality", "descriptive relativism", "descriptivism", "desire-belief model", "determination", "determinism", "dianoetic virtues", "dignity", "dilemma of determinism", "direct duties", "direct utilitarianism", "discourse ethics", "distributive justice", "diversity thesis", "edivine command", "divine command ethics", "divine command theory", "doctrine of double effect", "doctrine of the mean", "doing ethics", "doing, ethics of", "double effect, doctrine of", "double effect, principle of", "duties of commission", "duties of ommission", "duty-based ethics", "duty", "duty ethics", "dirty hands", "economy, ethics of", "egoism", "egoistic consequentialism", "egoistic hedonism", "emotion", "emotive theory of ethics", "emotivism", "empathy", "encraleia (Gr).", "end", "end in itself", "ends, kingdom of", "ends, principle of", "engineering ethics", "enkrateia (Gr).", "environmental ethics", "Epicurean ethics", "Epicureanism", "epistemic duty", "epistemic virtues", "epistemology of ethics", "equalitarianism", "equality", "eros (Gr).", "ethic", "error theory", "ethical", "ethical absolutism", "ethical altruism", "ethical anti-realism", " ethical autonomy", "ethical cognitivism", "ethical conditionalism", "ethical constructivism", "ethical contextualism", "ethical conventionalism", "ethical dualism", "ethical duty", "ethical egoism", "ethical empiricism", "ethical eudaimonism", "ethical formalism", "ethical generalism", "ethical hedonism", "ethical heteronomy", "ethical holism", "ethical impartialism", "ethical imperative", "ethical imperativism", "ethical individualism", "ethical intellectualism", "ethical intuitionism", "ethical irrealism", "ethical judgement", "ethical knowledge", "ethical legalism", "ethical monism", "ethical motivation", "ethical naturalism", "ethical neutralism", "ethical nihilism", "ethical noncognitivism", "ethical nonnaturalism", "ethical norm", "ethical objectivism", "ethical obligation", "ethical particularism", "ethical perfectionism", "ethical philosophy", "ethical pluralism", "ethical positivism", "ethical pragmatism", "ethical principalism", "ethical principle", "ethical purism", "ethical purity", "ethical rationalism", "ethical realism", "ethical reasoning", "ethical relativism", "ethical relativity", "ethical responsibility", "ethical rights", "ethical rule", "ethical satisficing", "ethical situationalism", "ethical skepticism", "ethical solipsism", "ethical status", "ethical subjectivism", "ethical supernaturalism", "ethical terms", "ethical theory", "ethical universalism", "ethical value", "ethical virtues", "ethical voluntarism", "ethical weakness", "ethicist", "ethic of belief", "ethics", "ethics of art", "ethics of being", "ethics of belief", "ethics of care", "ethics of caring", "ethics of conduct", "ethics of doing", "ethics of economy", "ethics of journalism", "ethics of love", "ethics of nonviolence", "ethics of virtue", "ethics ontology of", "ethics sociology of", "ethos (Gr).", "eudaimon (Gr).", "eudaimonia (Gr).", "eudaemonics", "eudaimonism", "eudaimonist ethics", "euthanasia (Gr).", "Euthyphro dilemma", "evaluative hedonism", "evil", "evolutionary ethics", "evolved ethics", "executive virtues", "existential ethics", "existentialist ethics", "expressivism", "externalism", "external value", "extrinsic good", "extrinsic value", "fact/value distinction", "fact/value gap", "fairness", "fatalism", "felicific calculus", "feminine virtues", "feminist ethics", "final good", "first order ethics", "forgiveness, paradox of", "formalism", "formalistic ethics", "formal justice", "free action", "free agent", "freedom", "freedom of action", "freedom of choic", "freedom of indifference", "freedom of spontaneity", "freedom of will", "free volition", "free will", "free will problem", "friendship", "game theory", "Gauguin problem", "general good", "generalism", "generalizability", "generic consistencyprinciple of", "goal-based ethics", "golden mean", "golden rule", "good", "good in itself", "good-making feature", "good-making quality", "goodness", "good reasons approach", "good reasons theory", "good will", "greatest good", "greatest happiness principle", "group responsibility", "guilt", "habit", "happiness", "hard determinism", "hard paternalism", "hedon", "hedone (Gr).", "hedonic calculus", "hedonism", "hedonistic paradox", "hedonistic utilitarianism", "herd-animal morality", "herd morality", "heteronomy", "heteronomy of ethics", "heteronomy of will", "һеxis (Gr).", "highest good", "holy will", "humanity, principle of", "human nature", "human rights", "human virtues", "Hume's fork", "Hume's law", "hypothetical imperative", "ideal agent", "idealized agent", "ideal observer", "ideal observer theory", "ideal utilitarianism", "I-It relationship", "ideal spectator", "immoral", "immoralism", "impartialism", "impartiality", "impartial spectator", "imperative", "imperativism", "imperfect duty", "imperfect rights", "inauthenticity", "incompatibilism", "indetermination", "indeterminism", "indifference, liberty of", "indirect duties", "indirect utilitarianism", "individual ethical egoism", "inherentism", "inherent value", "innocence", "instrumental good", "instrumentalism", "instrumental value", "intellectual virtues", "intention", "intentionalism", "internalism", "intrinsic bad", "intrinsic good", "intrinsic value", "intuitionism", "intuitive ethics", "involuntry act", "involuntary euthanasia", "irrealism", "is/ought dichotomy", "is/ought distiction", "is/ought gap", "is/ought problem", "is/ought question", "I-Thou relationship", "journalism, ethics of", "judgement of value", "jus naturae (L).", "jus naturale (L).", "justice", "justice as fairness", "just war", "just war theory", "Kantian ethics", "Kantianism", "kingdom of ends", "land ethics", "law of nature", "legal ethics", "legalism", "legal moralism", "liability responsibility", "libertarianism", "liberty", "liberty of indifference", "liberty of spontaneity", "liberum arbitrium (L).", "love", "love, ethics of", "macro ethics", "majoritarianism", "malum in se (L).", "marketing ethics", "masculine virtues", "maxim", "maximin principle", "maximin strategy", "[the] meam", "(the) mean, doctrine of", "means", "means-ends rationality", "means-ends reasoning", "media ethics", "medical ethics", "mental reservation", "mercy-killing", "merit", "meritarianism", "metaethical relativism", "metaethical subjectivism", "metaethical theory", "metaethics", "metaphysical libertarianism", "metaphysics of ethics", "micro ethics", "military ethics", "military virtues", "minimax principle", "monastic virtues", "monism", "moral", "moral absolutes", "moral absolutism", "moral act", "moral agency", "moral agent", "moral altruism", "moral anti-realism", "moral argument (for the existence of God)", "moral autonomy", "moral cognitivism", "moral community", "moral conscience", "moral constructivism", "moral conventionalism", "moral courage", "moral courage", "moral development", "moral dilemma", "moral dualism", "moral duty", "moral egoism", "moral emotions", "moral empiricism", "moral epistemology", "moral eudaimonism", "moral evil", "moral evolutionism", "moral fact", "moral faith", "moral formalism", "moral generalism", "moral good", "moral hedonism", "moral heteronomy", "moral holism", "moral impartialism", "moral imperative", "moral imperativism", "moral individualism", "moral intellectualism", "moral intuitionism", "moral irrealism", "moralism", "Moralität (Ge).", "morality", "moral judgement", "moral justification", "moral knowledge", "moral laxism", "moral legalism", "moral luck", "moral monism", "moral motivation", "moral naturalism", "moral neutralism", "moral nihilism", "moral noncognitivism", "moral nonnaturalism", "moral norm", "moral objectivism", "moral obligation", "moral ontology", "moral particularism", "moral patiency", "moral patient", "moral perfectionism ", "moral philosophy", "moral pluralism", "moral point of view", "moral positivism", "emoral pragmatism", "moral principle", "moral psychology", "moral purism", "moral purity", "moral rationalism", "moral realism", "moral reasoning", "moral relativism", "moral relativity", "moral responsibility", "moral rights", "moral rule", "morals", "moral satisficing", "moral Semantics", "moral sens", "moral sense school", "moral sense theory", "moral sentimentalism", "moral sentiments", "moral situationalism", "moral skepticism", "moral sociology", "moral solipsism", "moral standing", "moral status", "moral subjectivism", "moral terms", "moral theology", "moral theory", "moral universalism", "moral value", "moral virtues", "moral voluntarism", "moral weakness", "mores (L).", "motivation", "motivational externalism", "motivational internalism", "motive", "narrative ethics", "natural duty", "naturalistic fallacy", "natural law", "natural law ethics", "natural law theory", "natural obligation", "natural right", "natural virtues", "nature, right of", "negative duty", "negative freedom", "negative liberty", "negative responsibility", "negative rights", "negative utilitarianism", "neutralism", "neutrality", "nihilism", "non-basic action", "noncognitivism", "nonconsequentialism", "nondescriptivism", "nonethical", "nonmoral", "nonmoral good", "nonmoral virtue", "nonnaturalism", "non-natural properties", "nonutilitarianism", "nonviolence", "nonviolence, ethics of", "non-voluntary euthanasia", "norm", "normative egoism", "normative ethics", "normative judgement", "normaltiveness", "normative relativism", "normativity", "nuclear ethics", "nursing ethics", "objective rightness", "objectivism", "obligation", "obligatory act", "ommission, acts of", "ommission, duties of", "ontology of ethics", "open question argument", "organizational ethics", "original position", "original sin", "other", "other-regarding virtues", "ought", "ought-judgement", "overman", "overridingness", "pacifism", "pain", "paradox of forgiveness", "paradox of self-deception", "partialism", "partiality", "particularism", "passive euthanasia", "paternalism", "perfect duty", "perfectionism", "perfect rights", "person", "personal egoism", "personal ethics", "personal morality", "personal relations", "personal responsibility", "personhood", "philia (Gr).", "philosophical ethics", "philosophy of action", "phronesis (Gr).", "phronimos (Gr).", "Platonic love", "pleasure", "pleasure principle", "pluralism", "pluralistic ethics", "police ethics", "political ethics", "positive duty", "positive freedom", "positive liberty", "positive morality", "positive obligation", "positive rights", "positive utilitarianism", "possibilism", "practibility", "practical argument", "practical ethics", "practical freedom", "practical intelligence", "practical rationality", "practical reason", "practical reasoning", "practical Syllogism", "practical wisdom", "pragmatic ethics", "pragmatic nonviolence", "pragmatic pacifism", "pragmatist ethics", "praxis", "Predestination", "predestinationism", "preference utilitarianism", "prescriptive ethics", "prescriptive judgement", "prescriptiveness", "prescriptivism", "prescriptivity", "prima facie duty", "prima facie obligation", "prima facie right", "principalism", "principle", "principled ethics", "principled nonviolence", "principle of autonomy", "principle of double effect", "principle of ends", "principle of generic consistency", "principle of humanity", "principle of ripple in the pond", "principle of universality", "principle of universalizability", "principle of utility", "prisoners' dilemma", "private ethics", "private morality", "pro-attitude", "probabilism", "procedural justice", "pro-choice", "professional ethics", "projectivism", "pro-life", "prospective responsibility", "Protestant ethic", "Protestant work ethic", "prudence", "prudentia (L).", "psychic justice", "psychological altruism", "psychological egolism", "psychological eudaimonism", "psychological hedonism", "public good", "public morality", "punishment", "purpose", "quasi-realism", "rational choice theory", "rational egoism", "rational intuitionism", "realism", "reasons externalism", "reasons for action", "reasons internalism", "reciprocal altruism", "reciprocity", "rectificatory justice", "reflective equilibrium", "relational value", "relative value", "relativism", "remainder principle", "remainder rule", "research ethics", "responsibility", "ressentiment (fr).", "restrictive utilitarianism", "retributive justice", "retrospective. responsibility", "right", "right-based ethics", "right-making feature", "right-making quality", "right of nature", "right ethics", "rigorism", "ripple in the pond, principle of", "role responsibility", "rule-agapeism", "rule-consequentialism", "rule-deontological ethics", "rule-deontologism", "rule-utilitarianism", "Satisfice", "satisficing utilitarianism", "second order ethics", "self-deception, paradox of", "self-determination", "Self-love", "self-regarding virtues", "self-respect", "self-responsibility", "sentientism", "santimentalism", "seven capital sins", "seven deadly sins", "Sexual ethics", "sexual morality", "shame", "sin", "Sittlichkeit (Ge).", "situational ethics", "situationalism", "situation ethics", "situationism", "skepticism", "slave morality", "social choice theory", "social contract", "Social Darwinism", "social ethics", "social morality", "sociology of ethics", "sociology of morality", "Socratic intellectualism", "Socratic paradoxes", "soft determinism", "soft paternalism", "sophrosyne (Gr).", "speciesism", "spectator morality", "spontaneity, liberty of", "sport ethics", "stoic ethics", "strict duty", "strong paternalism", "subjective principle", "subjective rightness", "subjectivism", "substantive ethics", "summum bonum (L).", "supererogation", "supererogatory", "superman", "supernaturalism", "supervenience", "supreme good", "sympathy", "synderesis", "synteresis", "teleological ethics", "teleologism", "teleology", "telishment", "theological virtues", "theological utilitarianism ", "theological voluntarism", "theoretical ethics", "theory of action", "theory of value", "trolley problem", "Übermensch (Ge).", "ultimate good", "unethical", "universal ethical egoism", "universal hedonism", "universality, principle of", "universalizability", "universalizability, principle of", "universal prescriptivism", "utilitarian calculus", "utilitarianism", "utility", "utility calculus", "utility, principle of", "value", "value judgement", "value monism", "value pluralism", "value theory", "value, theory of", "vegeterianism", "veil of ignorance", "vice", "violence", "virtue", "virtue-based ethics", "virtue ethics", "virtue, ethics of", "virtus (L).", "vita activa (L).", "vita contemplativa (L).", "vital lie", "volition", "voluntarism", "voluntary act", "voluntary euthanasia", "want-belief model", "weakness of will", "weak paternalism", "wickedness", "will", "will, heteronomy of", "will, weakness of", "wisdom", "work ethic", "wrong-making feature", "Wrong-making quality", "accident", "accidental", "amoralist", "causal chain", "causal relation", "causal law", "causal principle", "cause", "concept", "definiens", "consequentialist", "definiendum", "definition", "differentia", "differentia specifica", "dilemma", "dilemma", "Divine command", "Theological voluntarism", "essence", "essential", "essentialism", "essentialist", "essentiality", "essentialness", "ethical non-naturalism", "moral non-naturalism", "naturalistic ethics", "extension", "four causes (the)", "immanent cause", "immoralist", "immrality", "immoralist", "individual concept", "intension", "logical relation", "moral error theory", "moral judgment", "moral non-cognitivism", "ethical non-cognitivism", "moral non-naturalism", "ethical non-naturalism", "moral sense", "moral success theory", "naturalism", "non-consequentialism", "object", "ontological relation", "primary subtance", "principle of causality", "causal principle", "property", "secondary substance", "spatial relation", "substance", "substantial", "substantive", "substantial form", "substantialism", "substantialist", "substratum", "success theory", "temporal relation", "utilitarianist", "Incontinence", "principle causality"];

function search(word)
{
    word = word.trim();
    word = word.toLowerCase();

    if (word == '')
    {
        return;
    }

    var found = -1;

    for (var i = 0; i < dictionary.length; i++)
    {
        if (word == dictionary[i].word.trim().toLowerCase())
        {
            found = i;
            break;
        }
    }

    $('#a').val("");
    $('#o').val("");

    if (found >= 0) {
        if (dictionary[found].a)
        {
            $('#a').val(dictionary[found].a);
        }
        else
        {
            $('#a').val("-");
        }
        if (dictionary[found].o)
        {
            $('#o').val(dictionary[found].o);
        }
        else
        {
            $('#a').val("-");
        }
    } else {
        $('#a').val("-");
        $('#o').val("-");
    }
}

$(document).ready(function() {
    $('.search-form').on('submit', function(event) {
        var query = $('.search-value').val();
        search(query);
        event.preventDefault();
    });

    $('.search-value').on('keyup', function(e) {
        if ($(this).val() == "") {
            $('#a').val('');
            $('#o').val('');
        }
    });

    $( ".search-value" ).autocomplete({
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(availableTags, request.term);
            response(results.slice(0, 10));
        },
        select: function (event, ui) {
            value = ui.item.value;
            $('.search-value').val(value);
            $('.search-form').submit();
            return false;
        }
    });
});