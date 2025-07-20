from os import system as cmd


def commit_changes(commit_message: str):
    if not commit_message:
        print("Commit message cannot be empty.")
        return

    if input("Are you SURE: ") == "YES":
        cmd("git add .")
        cmd(f'git commit -m "{commit_message}"')
        cmd("git push")
    else:
        print("Commit aborted.")


commit_changes(input("Enter commit message: "))
