import re

with open('crm.html', 'r') as f:
    content = f.read()

old_str = "'<button class=\"btn-add-queue\" onclick=\"addGmapLeadToDecisionQueue(\\'' + item.id + '\\')\">+ Send to Zan</button>' +"
new_str = """'<button class="btn-add-queue" onclick="addGmapLeadToDecisionQueue(\\'' + item.id + '\\')">+ Send to Zan</button>' +
            '<button onclick="generateAIPitch(\\'' + item.name.replace(\"'\", \"\\\\'\") + '\\', \\'' + item.category.replace(\"'\", \"\\\\'\") + '\\', \\'' + item.address.replace(\"'\", \"\\\\'\") + '\\')" style="margin-top:6px; width:100%; font-size:0.75rem; background:linear-gradient(135deg, #6366f1, #a855f7); border:none; padding:5px; border-radius:4px; color:white; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:4px;"><span style="font-size:0.9rem">🤖</span> Draft Pitch</button>' +"""

content = content.replace(old_str, new_str)

with open('crm.html', 'w') as f:
    f.write(content)
