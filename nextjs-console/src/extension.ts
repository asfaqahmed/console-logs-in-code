import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Create a new output channel named 'Next.js Console'
    const outputChannel = vscode.window.createOutputChannel('Next.js Console');
    outputChannel.show();

    // Register a command to display a welcome message
    let disposable = vscode.commands.registerCommand('nextjs-console.showWelcome', () => {
        outputChannel.appendLine('Next.js Console is Active!');
        vscode.window.showInformationMessage('Next.js Console is Active!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
