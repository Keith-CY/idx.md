---
stable_id: skills/skills-sh-softaworks-agent-toolkit-react-useeffect
type: skills
title: skills-sh-softaworks-agent-toolkit-react-useeffect
summary: |-
  # useEffect Anti-Patterns
  ## 1. Redundant State for Derived Values
  ```tsx
  // BAD: Extra state + Effect for derived value
  function Form() {
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
    const [fullName, setFullName] = useState('');
    useEffect(() => {
      setFullName(firstName + ' ' + lastName);
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/react-useeffect/anti-patterns.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/react-useeffect
github_stars: 672
github_forks: 53
github_is_organization: true
retrieved_at: 2026-04-06T07:32:26.462Z
content_sha256: 69146321260d67972646ba3cc98465d516431f543c4908cc60c2d60886a8dda9
---
